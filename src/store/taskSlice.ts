import {createSlice, Dispatch, PayloadAction} from "@reduxjs/toolkit";
import ITask from "../models/contracts/iTask";

interface TaskState {
    tasks: ITask[]
}

const initialState: TaskState = {tasks: []};

const taskSlice = createSlice({
    name: 'task',
    initialState,
    reducers: {
        addTask(state, action: PayloadAction<string>) {
            state.tasks.push({
                id: new Date().toISOString(),
                title: action.payload,
                tag: action.payload
            });
        },
        removeTask(state, action: PayloadAction<string>) {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        replaceTasks(state, action: PayloadAction<ITask[]>) {
            state.tasks = action.payload;
        }
    }
});

export const fetchTaskData = () => {
    return async (dispatch: Dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                'https://task-master-d8cee-default-rtdb.firebaseio.com/tasks.json'
            );

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            return await response.json();
        };

        try {
            const cartData = await fetchData();

            const transformedData = Object.keys(cartData).map((key) => {
                return {id: key, ...cartData[key]};
            });

            dispatch(
                replaceTasks(transformedData)
            );
        } catch (error) {
            // dispatch(
            //     uiActions.showNotification({
            //         status: 'error',
            //         title: 'Error!',
            //         message: 'Fetching cart data failed!',
            //     })
            // );
        }
    };
};
//
// export const sendCartData = (task: any) => {
//     return async (dispatch: Dispatch) => {
//         dispatch(
//             uiActions.showNotification({
//                 status: 'pending',
//                 title: 'Sending...',
//                 message: 'Sending cart data!',
//             })
//         );
//
//         const sendRequest = async () => {
//             const response = await fetch(
//                 'https://react-http-6b4a6.firebaseio.com/cart.json',
//                 {
//                     method: 'PUT',
//                     body: JSON.stringify({
//                         items: cart.items,
//                         totalQuantity: cart.totalQuantity,
//                     }),
//                 }
//             );
//
//             if (!response.ok) {
//                 throw new Error('Sending cart data failed.');
//             }
//         };
//
//         try {
//             await sendRequest();
//
//             dispatch(
//                 uiActions.showNotification({
//                     status: 'success',
//                     title: 'Success!',
//                     message: 'Sent cart data successfully!',
//                 })
//             );
//         } catch (error) {
//             dispatch(
//                 uiActions.showNotification({
//                     status: 'error',
//                     title: 'Error!',
//                     message: 'Sending cart data failed!',
//                 })
//             );
//         }
//     };
// };

export const {addTask, removeTask, replaceTasks} = taskSlice.actions;
export const taskReducer = taskSlice.reducer
import { ActionReducerMap, MetaReducer } from '@ngrx/store';

export interface State { }

export const rootReducers: ActionReducerMap<State> = {};

export const metaReducers: MetaReducer<State>[] = [consoleLoggerReducer]; //, clearState];

export function consoleLoggerReducer(reducer: any): any {
	return (state: any, action: any): any => {
		console.group(action.type);
		const nextState = reducer(state, action);
		console.log(`%c prev state`, `color: #9E9E9E; font-weight: bold`, state);
		console.log(`%c action`, `color: #03A9F4; font-weight: bold`, action);
		console.log(`%c next state`, `color: #4CAF50; font-weight: bold`, nextState);
		console.groupEnd();
		return nextState;
	};
}

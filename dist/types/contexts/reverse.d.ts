import Context from './context';
import type { Delta } from '../types';
declare class ReverseContext extends Context<Delta> {
    delta: Delta;
    pipe: 'reverse';
    nested?: boolean;
    newName?: `_${number}`;
    constructor(delta: Delta);
}
export default ReverseContext;

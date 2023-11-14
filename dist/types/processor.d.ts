import type Context from './contexts/context';
import type Pipe from './pipe';
import type { Options } from './types';
import type DiffContext from './contexts/diff';
import type PatchContext from './contexts/patch';
import type ReverseContext from './contexts/reverse';
declare class Processor {
    selfOptions: Options;
    pipes: {
        diff: Pipe<DiffContext>;
        patch: Pipe<PatchContext>;
        reverse: Pipe<ReverseContext>;
    };
    constructor(options?: Options);
    options(options?: Options): Options;
    pipe<TContext extends Context<any>>(name: string | Pipe<TContext>, pipeArg?: Pipe<TContext>): Pipe<DiffContext> | Pipe<PatchContext> | Pipe<ReverseContext> | Pipe<TContext>;
    process<TContext extends Context<any>>(input: TContext, pipe?: Pipe<TContext>): TContext['result'] | undefined;
}
export default Processor;

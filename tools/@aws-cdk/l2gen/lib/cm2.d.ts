import { SourceFile, ISourceModule } from './source-module';
export declare type CodePart = string | IRenderable;
export declare type HelperPosition = 'top' | 'bottom';
export declare class CM2 {
    readonly fileName: string;
    readonly currentModule: SourceFile;
    private readonly buffer;
    private readonly indents;
    private readonly helpers;
    private pendingIndent;
    private delegateHelpers?;
    constructor(fileName: string);
    render(): string;
    save(): void;
    add(...xs: Array<CodePart>): void;
    line(...xs: Array<CodePart>): void;
    write(x: string): void;
    addHelper(helper: IHelper): void;
    openBlock(...xs: CodePart[]): void;
    closeBlock(): void;
    block(xs: CodePart | CodePart[], cb: () => void): void;
    docBlock(lines: string[]): void;
    typeInThisFile(name: string): import("./type").IType;
    indent(add: string): void;
    unindent(): void;
    private get currentIndent();
    private flushPendingIndent;
    /**
     * Render all helpers at least once so we transitively collect all helpers of helpers
     */
    private dummyRenderHelpers;
    private renderHelpers;
}
export interface IRenderable {
    render(code: CM2): void;
}
export interface IHelper extends IRenderable {
    readonly position: HelperPosition;
    readonly identifier: string;
}
export declare class SymbolImport implements IHelper {
    readonly symbolName: string;
    readonly module: ISourceModule;
    readonly position = "top";
    readonly identifier: string;
    constructor(symbolName: string, module: ISourceModule);
    render(code: CM2): void;
}
export declare class HelperFunction implements IHelper {
    readonly functionName: string;
    private readonly block;
    readonly position = "bottom";
    readonly identifier: string;
    constructor(functionName: string, block: (x: CM2) => void);
    render(code: CM2): void;
}
export declare class RenderableHelper implements IHelper {
    readonly identifier: string;
    readonly position: HelperPosition;
    private readonly renderable;
    constructor(identifier: string, position: HelperPosition, renderable: IRenderable);
    render(code: CM2): void;
}

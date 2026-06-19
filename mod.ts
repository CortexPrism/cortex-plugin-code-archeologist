// deno-lint-ignore-file require-await, no-unused-vars
import type { PluginContext, Tool, ToolResult } from 'cortex/plugins';
function ok(n: string, o: unknown, s: number): ToolResult {
  return {
    toolName: n,
    success: true,
    output: JSON.stringify(o, null, 2),
    durationMs: Date.now() - s,
  };
}

const archeo_traceTool: Tool = {
  definition: {
    name: 'archeo_trace',
    description: 'Trace full history of a code section',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[code-archeologist] archeo_trace executed');
      return ok('archeo_trace', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'archeo_trace',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const archeo_contextTool: Tool = {
  definition: {
    name: 'archeo_context',
    description: 'Reconstruct original context and intent',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[code-archeologist] archeo_context executed');
      return ok('archeo_context', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'archeo_context',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

const archeo_blameTool: Tool = {
  definition: {
    name: 'archeo_blame',
    description: 'Deep git blame with PR and issue links',
    params: [],
    capabilities: ['network:fetch'],
  },
  execute: async (args, ctx) => {
    const s = Date.now();
    try {
      ctx.logger.info('[code-archeologist] archeo_blame executed');
      return ok('archeo_blame', { status: 'completed', result: 'stub' }, s);
    } catch (e) {
      return {
        toolName: 'archeo_blame',
        success: false,
        output: '',
        error: String(e),
        durationMs: Date.now() - s,
      };
    }
  },
};

export async function onLoad(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-code-archeologist] Loaded');
}
export async function onUnload(ctx: PluginContext): Promise<void> {
  ctx.logger.info('[cortex-plugin-code-archeologist] Unloading...');
}
export const tools: Tool[] = [archeo_traceTool, archeo_contextTool, archeo_blameTool];

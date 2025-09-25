
import { Brow } from "./Browser";
import { Edge } from "./Edge";
import { Firefox } from "./Firefox";
import { Chrome } from "./Chrome";

export class BrowserFactory {
    static async getBrowser(type: string): Promise<Brow> {
        switch (type.toLowerCase()) {
            case 'chromium':
                return new Chrome();
            case 'firefox':
                return new Firefox();
            case 'edge':
                return new Edge();
            default:
                throw new Error('Unsupported browser');
        }
    }
}

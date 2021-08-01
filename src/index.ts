import { NewAddon } from "@wowts/tsaddon";
import aceEvent from "@wowts/ace_event-3.0";
import aceConsole from "@wowts/ace_console-3.0";
import { debug } from "./util";

const Base = NewAddon("girls only Master Loot", aceConsole, aceEvent);

class GOML extends Base {
    OnInitialize() {
        debug("Test from GOML!");
    }
}

new GOML();

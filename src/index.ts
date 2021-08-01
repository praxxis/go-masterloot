import { NewAddon } from "@wowts/tsaddon";
import aceEvent from "@wowts/ace_event-3.0";
import aceConsole from "@wowts/ace_console-3.0";
import { debug } from "./util";
import { _G } from "@wowts/wow-mock";

const Base = NewAddon("girlsonlyMasterLoot", aceConsole, aceEvent);

const _GetNumLootItems = _G["GetNumLootItems"] as typeof GetNumLootItems;

class GOML extends Base {
    OnInitialize() {
        this.RegisterEvent("LOOT_OPENED", () => {
            debug(_GetNumLootItems());
        });
    }
}

_G["GOML"] = new GOML();

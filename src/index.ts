import { NewAddon } from "@wowts/tsaddon";
import aceEvent from "@wowts/ace_event-3.0";
import aceConsole from "@wowts/ace_console-3.0";
// import aceGui, { AceGUIWidgetBase } from "@wowts/ace_gui-3.0";
import { debug } from "./util";
import { _G, CreateFrame, UIParent } from "@wowts/wow-mock";
import aceDb, { AceDatabase } from "@wowts/ace_db-3.0";

const Base = NewAddon("girlsonlyMasterLoot", aceConsole, aceEvent);

const _GetNumLootItems = _G["GetNumLootItems"] as typeof GetNumLootItems;
const _LibStub = _G["LibStub"];

// class AceGUIFrame extends AceGUIWidgetBase {
//     SetTitle(title: string) {}
//     SetStatusText(statusText: string) {}
//     SetLayout(layoutType: "flow") {}
//     AddChild(child: AceGUIWidgetBase) {}
// }

// class AceGUIButton extends AceGUIWidgetBase {
//     SetText(text: string) {}
// }

interface GOMLDB {
    profile: {
        x: string;
        y: string;
        scale: string;
        point: string;
    };
}

class GOML extends Base {
    db!: AceDatabase & GOMLDB;

    defaultDB: GOMLDB = { profile: { x: "0", y: "0", scale: "1", point: "CENTER" } };

    OnInitialize() {
        this.db = aceDb.New("GOMLDB", this.defaultDB);
        debug(this.db.profile);

        this.RegisterEvent("LOOT_OPENED", () => {
            debug(_GetNumLootItems());
        });
    }

    createFrame = () => {
        const f = CreateFrame("Frame", "GOMLFrame", UIParent);
        f.SetHeight(100);
        f.SetWidth(100);

        // const f2 = aceGui.Create("Frame" as any) as any as AceGUIFrame;
        // f2.SetTitle("test");
        // f2.SetStatusText("test status text");
        // f2.SetLayout("flow");

        // const b = aceGui.Create("Button" as any) as any as AceGUIButton;
        // b.SetWidth(170);
        // b.SetText("Button!");
        // b.SetCallback("OnClick", () => debug("clicked!"));

        // f2.AddChild(b);

        // f.AddChild(f2);

        const lwin = _LibStub("LibWindow-1.1");

        lwin.RegisterConfig(f, this.db.profile);
        lwin.RestorePosition(f);
        lwin.MakeDraggable(f);
    };
}

_G["GOML"] = new GOML();

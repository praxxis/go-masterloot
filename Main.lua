local _, GOML = ...
GOML = LibStub("AceAddon-3.0"):NewAddon(GOML, "girls only Master Loot", "AceConsole-3.0", "AceEvent-3.0")
_G.GOML = GOML

local defaults = {
    global = {
        rollTimeout = 20 -- seconds
    }
}

function GOML:OnInitialize()
    self.db = LibStub("AceDB-3.0"):New("GOMLDB", defaults)
    self:Print("Loaded GOML")

    self.useFakeData = false
    self.lootWindow = nil
end

GOML:RegisterChatCommand('goml', "ChatCommand")

function GOML:GetItems()
end

function GOML:AwardItem(slot, playerIndex)
end

function GOML:OpenWindow()
    if not self.lootWindow then
        self:CreateWindow()
    end

    GOML:Update()
end

function GOML:CreateWindow()
end

function GOML:CloseWindow()
end

function GOML:Update()
end

function GOML:OpenTestWindow()
    self.useFakeData = true
    self:OpenWindow()
end

function GOML:ChatCommand(input)
    if input:trim() == "test" then
        self:OpenTestWindow()
    end
end

function GOML:LOOT_CLOSED()
end

function GOML:LOOT_OPENED()
    -- ignore if not master loot and in raid
	if GetNumLootItems() > 0 then
    end
end

function GOML:LOOT_SLOT_CLEARED(slot)
end

--@debug@
-- globally available table dump function
function DBG_dump(o)
	if type(o) == 'table' then
	   local s = '{ '
	   for k,v in pairs(o) do
		  if type(k) ~= 'number' then k = '"'..k..'"' end
		  s = s .. '['..k..'] = ' .. DBG_dump(v) .. ','
	   end
	   return s .. '} '
	else
	   return tostring(o)
	end
end
--@end-debug@

--@alpha@
local dbgMessageShown = false
local function dbg(msg, data)
	if ViragDevTool_AddData then
		ViragDevTool_AddData(data, msg)
	else
		if not dbgMessageShown then
			print("Please install ViragDevTool from http://mods.curse.com/addons/wow/varrendevtool to view debug info for Angry Girls.")
			dbgMessageShown = true
		end
	end
end
--@end-alpha@
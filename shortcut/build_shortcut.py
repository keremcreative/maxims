"""
Maxims kestirmesini (imzasız) üretir: shortcut/Maxims-unsigned.shortcut
Mac'te imzalamak için:
  shortcuts sign --mode anyone --input shortcut/Maxims-unsigned.shortcut --output public/Maxims.shortcut
"""
import os
import plistlib
import sys
import uuid

URL = sys.argv[1] if len(sys.argv) > 1 else "https://maxims-brown.vercel.app/bugun.png"
u1 = str(uuid.uuid4()).upper()

doc = {
    "WFWorkflowClientVersion": "2302.0.4",
    "WFWorkflowMinimumClientVersion": 900,
    "WFWorkflowMinimumClientVersionString": "900",
    "WFWorkflowHasShortcutInputVariables": False,
    "WFWorkflowIcon": {"WFWorkflowIconStartColor": 2071128575, "WFWorkflowIconGlyphNumber": 59446},
    "WFWorkflowImportQuestions": [],
    "WFWorkflowInputContentItemClasses": ["WFStringContentItem"],
    "WFWorkflowOutputContentItemClasses": [],
    "WFWorkflowTypes": [],
    "WFQuickActionSurfaces": [],
    "WFWorkflowActions": [
        {
            "WFWorkflowActionIdentifier": "is.workflow.actions.downloadurl",
            "WFWorkflowActionParameters": {
                "UUID": u1,
                "WFURL": URL,
                "WFHTTPMethod": "GET",
                "ShowHeaders": False,
            },
        },
        {
            "WFWorkflowActionIdentifier": "is.workflow.actions.wallpaper.set",
            "WFWorkflowActionParameters": {
                "WFInput": {
                    "Value": {"OutputUUID": u1, "Type": "ActionOutput", "OutputName": "Contents of URL"},
                    "WFSerializationType": "WFTextTokenAttachment",
                },
                "WFWallpaperLocation": "Lock Screen",
                "WFWallpaperShowPreview": False,
                "WFWallpaperSmartCrop": False,
            },
        },
    ],
}

out = os.path.join(os.path.dirname(__file__), "Maxims-unsigned.shortcut")
with open(out, "wb") as f:
    plistlib.dump(doc, f, fmt=plistlib.FMT_BINARY)
print(out)

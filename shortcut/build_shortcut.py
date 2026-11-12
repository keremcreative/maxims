"""
Maxims kestirmesini (imzasız) üretir: shortcut/Maxims-unsigned.shortcut
Mac'te imzalamak için:
  shortcuts sign --mode anyone --input shortcut/Maxims-unsigned.shortcut --output public/Maxims.shortcut
"""
import os
import plistlib
import sys
import uuid

BASE = sys.argv[1] if len(sys.argv) > 1 else "https://maxims-brown.vercel.app/bugun.png"
# Adresin sonuna kestirmenin girdisi eklenir (?m=<girdi>):
# otomasyonda girdi boş -> günün sözü; uygulamadaki düğme "yeni" gönderir -> rastgele söz.
url_text = BASE + "?m=\uFFFC"
pos = len(url_text.encode("utf-16-le")) // 2 - 1
URL = {
    "Value": {"string": url_text, "attachmentsByRange": {f"{{{pos}, 1}}": {"Type": "ExtensionInput"}}},
    "WFSerializationType": "WFTextTokenString",
}
u1 = str(uuid.uuid4()).upper()

doc = {
    "WFWorkflowClientVersion": "2302.0.4",
    "WFWorkflowMinimumClientVersion": 900,
    "WFWorkflowMinimumClientVersionString": "900",
    "WFWorkflowHasShortcutInputVariables": True,
    "WFWorkflowIcon": {"WFWorkflowIconStartColor": 2071128575, "WFWorkflowIconGlyphNumber": 59446},
    "WFWorkflowImportQuestions": [],
    "WFWorkflowInputContentItemClasses": ["WFStringContentItem", "WFURLContentItem"],
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

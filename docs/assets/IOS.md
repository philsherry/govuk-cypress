# iOS technical setup

## Accessibility Shortcuts

It’s a good idea to setup shortcuts for regular-use features.

`Settings » Accessibility » Accessibility Shortcut`

These make good defaults:
- VoiceOver
- Voice Control
- Zoom
- Colour Filters
- Smart Invert

## Display settings

### Font size in Safari

`Settings » Safari » Page Zoom`: set the page zoom to 200%

### Invert colours

`Settings » Accessibility » Smart Invert`

### Greyscale

`Settings » Accessibility » Colour Filters » Greyscale`

## Screen magnifier (Zoom)

`Settings » Accessibility » Zoom`

## Screen reader (VoiceOver)

`Settings » Accessibility » VoiceOver`

## Voice recognition (Voice Control)

`Settings » Accessibility » Voice Control`

## Xcode Accessibility Inspector

Requires a Mac with Xcode to run this.

1. Open Xcode on your Mac and connect the mobile device to it (cable or network)
2. `Windows » Devices and Simulators`
3. If it’s the first time you’ve done this, the Devices and Simulators window will say it is busy making the device ready for development. Wait for this to finish.
4. While you wait, open `Xcode » Open Developer Tool » Accessibility Inspector`
5. Where it says `[Your Mac] » All processes`, click the name of your Mac and choose your mobile device.
6. Choose the Audit tab on the top-right.
7. Click the <kbd>Run Audit</kbd> button.
8. `File » Save Audit Report As…`

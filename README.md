<h1 align="center">
  <img src="src/images/brand/icon.png" height="100" width="100" alt="Icon" />
  <br />
  TTV LOL PRO
  <br />
</h1>

<div align="center">
  <a href="https://github.com/younesaassila/ttv-lol-pro/issues">
    <img
      alt="GitHub issues"
      src="https://img.shields.io/github/issues/younesaassila/ttv-lol-pro"
    />
  </a>
  <a href="https://github.com/younesaassila/ttv-lol-pro/stargazers">
    <img
      alt="GitHub stars"
      src="https://img.shields.io/github/stars/younesaassila/ttv-lol-pro"
    />
  </a>
  <a href="https://github.com/younesaassila/ttv-lol-pro/releases">
    <img
      alt="GitHub all releases"
      src="https://img.shields.io/github/downloads/younesaassila/ttv-lol-pro/total"
    />
  </a>
</div>

<br />

> ℹ️ This is a fork of the original project at https://github.com/TTV-LOL/extensions

> ℹ️ TTV LOL PRO uses the same backend server as the official TTV LOL extension, meaning it experiences the same server issues (if there are any).

TTV LOL PRO removes livestream ads from [Twitch](https://www.twitch.tv/).

This fork:

- disables TTV LOL for channels you are subscribed to,
- lets you whitelist channels,
- improves TTV LOL's popup by showing stream status and "Whitelist" button,
- falls back to the stream with ads if the API server errors out,
- improves your privacy by removing your Twitch token from API requests,
- lets you add custom primary/fallback proxies.

**Recommendations:**

- [uBlock Origin](https://ublockorigin.com/)

  - removes banner ads,
  - removes ads on VODs.

- [vaft/video-swap-new](https://github.com/pixeltris/TwitchAdSolutions#scripts)

  - increases ad removal success rate.

## Screenshot

<div align="center">
  <img
    src="https://user-images.githubusercontent.com/47226184/210093901-2d0c7f62-5e1f-4ce2-83f3-e35812361e20.png"
    alt="Popup on Firefox"
  />
</div>

## Installation

`⚠️ Please disable/uninstall the official TTV LOL extension to avoid conflicts.`

### Firefox (Recommended)

#### ✅ With Automatic Updates

1. Download the [latest version](https://github.com/younesaassila/ttv-lol-pro/releases/latest) of this extension from the [Releases page](https://github.com/younesaassila/ttv-lol-pro/releases) (XPI file)
1. Go to `about:addons`
1. Click on the gear icon then select "Install Add-on From File…"
1. Select the XPI file you just downloaded

### Chromium (Chrome, Edge, or Brave)

#### ✅ With Automatic Updates (Windows & Linux)

> ⚠️ **For Windows users:** This method will display a "Your browser is managed by your organisation" warning in your browser. This is normal and can be ignored, but if you are not comfortable with this, please use the unpacked (without automatic updates) method below.

1. Download the [latest version](https://github.com/younesaassila/ttv-lol-pro/releases/latest) of this extension as a CRX file (Save link as…) from the [Releases page](https://github.com/younesaassila/ttv-lol-pro/releases)
1. Go to `chrome://extensions`
1. Turn on "Developer mode" (top right-hand corner)
1. Drag and drop the CRX file anywhere on the extensions page (you should see something like [this](https://user-images.githubusercontent.com/47226184/213722956-73fcc824-8065-441f-a893-ed96c33c2139.png) on Windows)
1. **For Windows users only:** Add this extension to your browser's allowlist via the Registry Editor _(if you don't do this, Chrome will disable the extension the next time it launches)_
   1. Download the `allowlist.zip` file from the [latest release](https://github.com/younesaassila/ttv-lol-pro/releases/latest)
   1. Unzip the ZIP file you just downloaded
   1. Run the REG file for your browser (Chrome, Edge, or Brave)
   1. Fully close and restart your browser

#### ❌ Without Automatic Updates (All operating systems)

1. Download the [latest version](https://github.com/younesaassila/ttv-lol-pro/releases/latest) of this extension from the [Releases page](https://github.com/younesaassila/ttv-lol-pro/releases) (ZIP file)
1. Unzip the ZIP file you just downloaded
1. Go to `chrome://extensions`
1. Turn on `Developer mode`
1. Click on `Load unpacked`
1. Select the unzipped folder you just created

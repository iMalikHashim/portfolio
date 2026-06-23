import { Component, type ReactNode } from "react";

/**
 * Error boundary that protects the rest of the page if the WebGL/Three.js
 * scene fails to initialize (e.g. no GPU, WebGL disabled, headless render).
 * On failure it renders nothing — the hero stays fully intact.
 */
export default class SafeCanvas extends Component<
  { children: ReactNode },
  { failed: boolean }
> {
  state = { failed: false };

  static getDerivedStateFromError() {
    return { failed: true };
  }

  componentDidCatch() {
    // swallow — the 3D background is purely decorative
  }

  render() {
    if (this.state.failed) return null;
    return this.props.children;
  }
}

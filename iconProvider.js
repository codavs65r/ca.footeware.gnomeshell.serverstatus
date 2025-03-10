"use strict";

import Gio from "gi://Gio";
import { Status } from "./status.js";

/**
 * Provides gicons and their statuses.
 */
export class IconProvider {
    /**
     * Constructor.
     *
     * @param {String} assetPath path to image resources
     */
    constructor() {
        this.serverIcon = "face-smile-symbolic";
        this.serverUpIcon = "face-cool-symbolic";
        this.serverDownIcon = "face-shutmouth-symbolic";
        this.serverBadIcon = "face-sick-symbolic";

        this.serverClass = "icon-init";
        this.serverUpClass = "icon-up";
        this.serverDownClass = "icon-down";
        this.serverBadClass = "icon-bad";
    }

    /**
     * Get a gicon for the provided {Status}.
     *
     * @param {Status} status
     */
    getIcon(status) {
        let icon;
        switch (status) {
            case Status.Up:
                icon = this.serverUpIcon;
                break;
            case Status.Down:
                icon = this.serverDownIcon;
                break;
            case Status.Bad:
                icon = this.serverBadIcon;
                break;
            default:
                icon = this.serverIcon;
        }
        return icon;
    }

    /**
     * Get a gicon for the provided {Status}.
     *
     * @param {Status} status
     */
    getClass(status) {
        let styleClass;
        switch (status) {
            case Status.Up:
                styleClass = this.serverUpClass;
                break;
            case Status.Down:
                styleClass = this.serverDownClass;
                break;
            case Status.Bad:
                styleClass = this.serverBadClass;
                break;
            default:
                styleClass = this.serverInitClass;
        }
        return styleClass;
    }    

    /**
     * Get a {Status} for the provided gicon.
     *
     * @param {Gio.icon} icon
     */
    getStatus(icon) {
        let status;
        switch (icon) {
            case this.serverUpIcon:
                status = Status.Up;
                break;
            case this.serverDownIcon:
                status = Status.Down;
                break;
            case this.serverBadIcon:
                status = Status.Bad;
                break;
            default:
                status = Status.Init;
        }
        return status;
    }

    /**
     * Sets all status-related gicons to null for garbage collection.
     */
    destroy() {
        this.serverIcon = null;
        this.serverUpIcon = null;
        this.serverDownIcon = null;
        this.serverBadIcon = null;
    }
}

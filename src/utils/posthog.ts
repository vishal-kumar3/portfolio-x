"use client"
import posthog from "posthog-js"

export enum ButtonEventName {
  HomeNavbar = "Button: HomeNavbar",
  AboutNavbar = "Button: AboutNavbar",
  WorkNavbar = "Button: WorkNavbar",
  DiscoverMyWorkButton = "Button: DiscoverMyWorkButton",
  ResumeButton = "Button: ResumeButton",
  SkillButton = "Button: SkillButton"
}

export enum SocialEventName {
  Discord = "Social: Discord",
  Github = "Social: Github",
  Mailto = "Social: Mailto",
  Linkedin = "Social: LinkedIn",
  Leetcode = "Social: Leetcode",
}

export enum ProjectEventName {
  Live = "Project: Live: ",
  Repo = "Project: Repo: ",
}

export enum ThemeEventName {
  LightDefault = "Theme: Light: Default",
  DarkDefault = "Theme: Dark: Default",
  LightBlue = "Theme: Light: Blue",
  DarkBlue = "Theme: Dark: Blue",
}

export const buttonClickEvent = (eventName: ButtonEventName) => {
  posthog.capture(eventName, {
    Clicked: true,
  })
}

export const socialClickEvent = (eventName: SocialEventName) => {
  posthog.capture(eventName, {
    Clicked: true,
  })
}

export const projectClickEvent = (eventName: ProjectEventName, projectName: string) => {
  posthog.capture(`${eventName} ${projectName}`, {
    Clicked: true,
  })
}

export const themeClickEvent = (eventName: ThemeEventName) => {
  posthog.capture(eventName, {
    Clicked: true,
  })
}

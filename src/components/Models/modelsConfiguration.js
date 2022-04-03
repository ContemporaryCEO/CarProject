import config from '../../config/default.json'

export const localizedLayout = config.switchEng ? config.layouts.EN_layout.Models : config.layouts.RU_layout.Models
export const windowBreakpoints = config.windowBreakpoints

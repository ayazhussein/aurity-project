import Noty from "noty";

export default function notify(text, type) {
    return new Noty({
        type,
        layout: 'topRight',
        theme: 'mint',
        timeout: 5000,
        progressBar: true,
        closeWith: ['click'],
        animation: {
            open: 'noty_effects_open',
            close: 'noty_effects_close'
        },
        queue: 'global',
        text
    })
}
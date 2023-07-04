export function sendMessage(message) {
    window.parent.postMessage({
        mceAction: 'insertContent',
        content: message
    }, '*');

    window.parent.postMessage({
        mceAction: 'close'
    }, '*');
}
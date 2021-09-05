
export class CommonUtils {

    public static isPc(): boolean {
        const reg = /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i;
        if ((navigator.userAgent.match(reg))) {
            return false;
        }
        return true;
    }
}
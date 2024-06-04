export class TestUtils {
    private static readonly AB = "abcdefghijklmnopqrstuvwxyz1234567890";

    static uuid(): string {
        return Math.random().toString(36).substring(2) + Date.now().toString(36);
    }

    static randomString(len: number): string {
        let sb = "";
        for (let i = 0; i < len; i++) {
            sb += this.AB.charAt(Math.floor(Math.random() * this.AB.length));
        }
        return sb;
    }

    static randomNumber(len: number): string {
        return Math.floor(Math.random() * (9 * Math.pow(10, len - 1) - 1) + Math.pow(10, len - 1)).toString();
    }

    static randomEmail(username: string): string {
        return `${username}@user.test`;
    }
}
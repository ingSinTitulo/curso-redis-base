import 'dotenv/config';
import { Application } from "./Application";

function Start (): void {
    const app = Application.getInstance();
    app.start(
        () => console.log(`Server is running on port ${process.env.PORT}`)
    );
}

Start();
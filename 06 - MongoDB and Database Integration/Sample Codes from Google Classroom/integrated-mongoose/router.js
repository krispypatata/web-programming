import { addStudent, findStudent, homepage } from "./controller.js";

const router = (app) => {
    app.get('/', homepage);
    app.post('/add_student', addStudent);
    app.post('/find_student', findStudent);
}

export default router;
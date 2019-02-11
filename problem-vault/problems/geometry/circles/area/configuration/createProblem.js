
export function createProblem(problemGenerator) {
    return {
        generator: problemGenerator,
        presenter: "",
        solver: {
            house: ctx => {
                ctx.beginPath();
                // Set line width
                ctx.lineWidth = 5;

                // Wall
                ctx.strokeRect(75, 140, 150, 110);

                // Door
                ctx.fillRect(130, 190, 40, 60);

                // Roof
                ctx.moveTo(50, 140);
                ctx.lineTo(150, 60);
                ctx.lineTo(250, 140);
                ctx.closePath();
                ctx.stroke();
            }
        },
        answer: problemGenerator.area // This will be the answer object. Input type, display, and check answer
    }
}
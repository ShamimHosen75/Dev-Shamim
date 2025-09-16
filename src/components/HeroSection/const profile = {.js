const profile = {
    name: 'Billal Hosen Shamim',
    title: 'Aspiring Software Engineer | Frontend Developer | WordPress Expert | Problem Solver',
    skills: [
        'React', 'NextJS', 'Redux', 'Express',
        'MySQL', 'MongoDB', 'Docker', 'AWS', 'TypeScript',
        'GraphQL', 'Git', 'Linux', 'Discord Development'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 4, 
    hireable: function() {
        return (
            this.hardWorker &&
            this.problemSolver &&
            this.skills.length >= 5 &&
            this.yearsOfExperience >= 5
        );
    }
};
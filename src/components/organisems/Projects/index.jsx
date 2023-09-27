import CardProjects from "../../molecules/CardProjects";

function Projects() {
    return (
        <section className="container mx-auto pt-24">
            <div className="flex justify-between items-center">
                <div className="w-auto">
                    <h2 className="text-3xl text-gray-900 mb-8">
                        New projects you can <br />
                        take care of
                    </h2>
                </div>
                <div className="w-auto mt-5">
                    <a className="text-gray-900 hover:underline text-md font-medium" href="">
                        View All
                    </a>
                </div>
            </div>
            <div className="flex mt-3 -mx-6">
                <CardProjects/>
            </div>
        </section>
    );
}

export default Projects;

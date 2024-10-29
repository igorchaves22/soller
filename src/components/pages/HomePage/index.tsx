import { MainTemplate } from "~components/templates";
import { assets } from "~utils";

export function HomePage() {
    return (
        <MainTemplate
            content1={{
                title: "Get the Sun to Power Your Home",
                description:
                    "Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque.",
                testimonial: {
                    testimonial:
                        "“Viverra viverra nibh enim et aliquam, enim. Tempor, sit mus viverra orci dui consequat turpis scelerisque faucibus.”",
                    src: assets.profile3,
                    name: "Rwanda Melflor",
                    subtitle: "zerowaste.com"
                }
            }}
            content2={{
                subtitle: "No more waste",
                title: "Pick the Sun",
                description:
                    "Et pulvinar nec interdum integer id urna molestie porta nullam. A, donec ornare sed turpis pulvinar purus maecenas quam a. Erat porttitor pharetra sed in mauris elementum sollicitudin.",
                src: assets.image1
            }}
            content3={{
                subtitle: "Services",
                title: "Personalized services",
                description:
                    "Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.",
                src: assets.image2,
                list: [
                    {
                        title: "Et mauris",
                        text: "Posuere quis sed mauris non curabitur pretium elementum eget. Feugiat sed maecenas eu accumsan tristique."
                    },
                    {
                        title: "Eget sit",
                        text: "Sit bibendum donec dolor fames neque vulputate non sit aliquam. Consequat turpis natoque leo, massa."
                    },
                    {
                        title: "Imperdiet pellentesque",
                        text: "Platea arcu dapibus non magna cursus lectus id sollicitudin. Enim viverra parturient tristique nulla."
                    },
                    {
                        title: "Non libero",
                        text: "Congue mauris sem vel, urna viverra. Urna, nibh leo suscipit purus ut sed eros, consectetur viverra."
                    }
                ]
            }}
            content4={{
                subtitle: "System features",
                title: "Powerful features",
                description:
                    "Pretium lectus ultrices sit tempor, sit ullamcorper volutpat et et. Auctor turpis semper id sit ornare maecenas lectus sed.",
                src: assets.image3,
                list: [
                    {
                        title: "Erat sit",
                        text: "Id quis lectus pharetra, ultricies integer montes, amet, gravida consectetur. Nunc convallis fringilla nisl magna sagittis."
                    },
                    {
                        title: "Ullamcorper arcu",
                        text: "Ipsum at id hendrerit amet faucibus commodo quam nullam. Lectus auctor habitant duis dictum."
                    },
                    {
                        title: "Et pellentesque",
                        text: "Mi vitae, massa eu molestie massa euismod volutpat condimentum. Blandit molestie ullamcorper hendrerit purus lorem vulputate."
                    },
                    {
                        title: "Amet egestas",
                        text: "Elementum, libero, lacus, vel ullamcorper at velit id. Malesuada velit et, ullamcorper malesuada amet, felis. "
                    }
                ]
            }}
            content5={{
                subtitle: "Join other Sun harvesters",
                title: "Make something awesome",
                description:
                    "Dui euismod iaculis libero, aliquet vitae et elementum porttitor. Eleifend mi tristique condimentum congue fusce nunc, donec magnis commodo.",
                list: [
                    {
                        testimonial:
                            "Purus maecenas quis elit eu, aliquet. Tellus porttitor ut sollicitudin sit non fringilla. Quam nunc volutpat senectus neque eget amet pharetra, euismod. Tempus, nunc, molestie imperdiet curabitur commodo euismod.",
                        src: assets.profile1,
                        name: "Jane Cooper",
                        subtitle: "10KWh"
                    },
                    {
                        testimonial:
                            "Vehicula sit sit pharetra bibendum ut risus accumsan. Purus, in metus, enim, ipsum morbi euismod pellentesque. Mattis pharetra accumsan eget est mi enim, id. Sit quam tortor eu tellus non, in euismod integer.",
                        src: assets.profile2,
                        name: "Ralph Edwards",
                        subtitle: "32KWh"
                    },
                    {
                        testimonial:
                            "Viverra lacus suspendisse elit, adipiscing orci, non turpis etiam sapien. Viverra blandit sem neque pretium. Duis enim semper fermentum consequat aenean libero. Blandit porta leo condimentum dolor, nisi, aliquet ante laoreet.",
                        src: assets.profile3,
                        name: "Courtney Henry",
                        subtitle: "6KWh"
                    },
                    {
                        testimonial:
                            "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
                        src: assets.profile4,
                        name: "Cameron Williamson",
                        subtitle: "12KWh"
                    },
                    {
                        testimonial:
                            "Hendrerit augue ut nec, senectus quis integer netus. Sagittis fusce rhoncus magnis habitant amet amet. Egestas amet habitasse amet risus tellus ornare. Hendrerit augue ut nec, senectus. Mauris egestas feugiat leo vitae praesent neque, et.",
                        src: assets.profile4,
                        name: "Cameron Williamson",
                        subtitle: "12KWh"
                    }
                ]
            }}
            content6={{
                subtitle: "Get the Sun to power your home",
                title: "All the power that you need for your house is now available",
                src: assets.image4
            }}
        />
    );
}

/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Badge,
  Button,
  Card,
  Group,
  Image,
  Indicator,
  Text,
  useMatches,
} from "@mantine/core";
import FullProjectModel from "./FullProjectModel";
import { useDisclosure } from "@mantine/hooks";

const ProjectCard = (props: any) => {
  const [opened, { open, close }] = useDisclosure(false);
  const badge = useMatches({
    xsm: "sm",
    md: "md",
    lg: "lg",
  });
  // const btn =useMatches({
  //     xs:"xs", sm:"sm", md:"md"
  // });

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      className="w-[32%] lg-mx:w-[46%] md-mx:w-[48%] sm-mx:w-[90%] xs-mx:w-full"
    >
      <Card
        onClick={open}
        className="!bg-bgColor cursor-pointer transition-transform duration-300 ease-in-out hover:!scale-[1.02] mb-5 hover:!shadow-[0_0_10px_1px_#64FFDA80] xs-mx:!shadow-[0_0_10px_1px_#64FFDA80] !border-primaryColor border-2"
        shadow="lg"
        padding="sm"
        radius="lg"
        withBorder
      >
        <Card.Section className="p-3">
          <Image
            className="!rounded-xl !shadow-[0_0_5px_0_#64FFDA] "
            src={props.image}
            alt={props.image}
          />
        </Card.Section>

        <Group justify="space-between" mt="xs" mb="xs">
          {/* <Text className="text-2xl gap-2 !font-bold !text-white flex items-center">
                    {props.title}
                    {
                        props.live ? <Badge variant="outline" color="green" rightSection={<Indicator color="green" position="middle-end" size={7} processing></Indicator>}>Live</Badge> : <Badge variant="outline" color="red" rightSection={<Indicator color="red" position="middle-end" size={7} processing></Indicator>}>Live</Badge>
                    }
                  </Text> */}
          <div className="!text-2xl gap-2 !font-bold !text-white flex items-center sm-mx:!text-xl">
            {props.title}
            {props.live === true && (
              <Badge
                className="!px-1"
                variant="outline"
                color="green"
                rightSection={
                  <Indicator
                    className="!mr-0.5"
                    color="green"
                    position="middle-end"
                    size={7}
                    processing
                  ></Indicator>
                }
              >
                Live
              </Badge>
            )}
          </div>
        </Group>

        <Group mb="sm" className="!gap-2">
          {props.technologies.map(
            (tech: string, index: number) =>
              index < 3 && (
                <Badge key={index} variant="light" color="#64FFDA" size={badge}>
                  {tech}
                </Badge>
              )
          )}
        </Group>

        <Text
          className="!text-justify !text-sm xs-mx:!text-xs"
          lineClamp={5}
          size="sm"
          c="dimmed"
        >
          {props.desc}
        </Text>

        <Button
          onClick={open}
          className=""
          color="#64FFDA"
          variant="outline"
          mt="md"
          radius="md"
        >
          Show More
        </Button>
      </Card>
      <FullProjectModel
        opened={opened}
        close={close}
        title={props.title}
        image={props.image}
        desc={props.desc}
        live={props.live}
        link={props.link}
        technologies={props.technologies}
        github={props.github}
      />
    </div>
  );
};

export default ProjectCard;

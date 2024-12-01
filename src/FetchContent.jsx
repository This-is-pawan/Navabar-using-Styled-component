import { createClient } from "contentful";
import { useEffect, useState } from "react";

// Initialize the Contentful client
const client = createClient({
  space: "3e7vobor0uwr",
  environment: "master",
  accessToken: "yBcDhn4DxaqlivduVea3hJF91Iy1yVaEdA2KkFq-gGs",
});

const useFetchProjects = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await client.getEntries({ content_type: "projects" });

        const projects = response.items.map((item) => {
          const { title, url, image } = item.fields;
          const id = item.sys.id;
          const img = image?.fields?.file?.url;
          return { title, url, image: img, id };
        });

        setProjects(projects);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching projects:", error);
        setLoading(false);
      }
    };

    getData();
  }, []);

  return { loading, projects };
};

export default useFetchProjects;

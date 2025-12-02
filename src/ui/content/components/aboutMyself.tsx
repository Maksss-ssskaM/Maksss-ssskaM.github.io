import { Card, Text } from "@/ui/components";
import { useTranslation } from "react-i18next";

export const AboutMyself = () => {
  const { t } = useTranslation("sections");
  return (
    <Card id="about-myself">
      <Text
        as="h2"
        size={20}
        children={t("about-myself.title")}
        weight="bold"
      />
      <Text>{t("about-myself.description")}</Text>
    </Card>
  );
};

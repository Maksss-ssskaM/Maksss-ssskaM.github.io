import { Content } from "@/components/content";
import { useI18n } from "@/i18n";
import OxygenDashboardImage from "@/sections/roadMap/assets/media/oxygen/dashboard.jpg";
import OxygenNotificationsImage from "@/sections/roadMap/assets/media/oxygen/notifications.jpg";
import OxygenCalcsImage from "@/sections/roadMap/assets/media/oxygen/calcs.jpg";
import OxygenAdminImage from "@/sections/roadMap/assets/media/oxygen/admin.jpg";
import OxygenMenuImage from "@/sections/roadMap/assets/media/oxygen/menu.jpg";
import OxygenDocumentsImage from "@/sections/roadMap/assets/media/oxygen/documents.jpg";
import styles from "./styles.module.scss";

export const Oxygen = () => {
  const { t } = useI18n();
  const headings = t.roadMap.blocks.headings;
  const block = t.roadMap.blocks.oxygen;
  const [lastContribution, ...mainContributionsReversed] = [
    ...block.contributions,
  ].reverse();
  const mainContributions = mainContributionsReversed.reverse();

  return (
    <Content>
      <Content.Wrapper>
        <h5>{headings.company}</h5>
        <p>{block.company}</p>
      </Content.Wrapper>

      <Content.Wrapper>
        <h5>{headings.contribution}</h5>
        <ul>
          {mainContributions.map((item) => (
            <li key={item}>{item}</li>
          ))}
          <li>
            {lastContribution}
            <ul>
              {block.services.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        </ul>
      </Content.Wrapper>
      <Content.Media className={styles.customImageWrapper}>
        <img src={OxygenDashboardImage} alt="dashboard" />
        <img src={OxygenMenuImage} alt="menu" />
        <img src={OxygenCalcsImage} alt="calcs" />
        <img src={OxygenNotificationsImage} alt="notifications" />
        <img src={OxygenAdminImage} alt="admin" />
        <img src={OxygenDocumentsImage} alt="documents" />
      </Content.Media>
    </Content>
  );
};

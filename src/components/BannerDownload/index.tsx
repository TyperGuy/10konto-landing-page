import {
  BannerContainer,
  BannerButton,
  BannerDescription,
  BannerGroupButtons,
  BannerTitle,
  BannerBackgroundIllustration,
} from './styles';
import AppStore from '~/assets/appstore2.svg';
import GooglePlay from '~/assets/googleplay.svg';
import BackgroundIllistration from '~/assets/bannerr-bg.svg';

export const BannerDownload = () => {
  return (
    <BannerContainer>
      <BannerBackgroundIllustration>
        <BackgroundIllistration />
      </BannerBackgroundIllustration>
      <BannerTitle>
        Baixe a APP e comece já a economizar nas suas compras
      </BannerTitle>
      <BannerDescription>
        O seu assistente para compras inteligentes
      </BannerDescription>

      <BannerGroupButtons>
        <BannerButton href='#'>
          <AppStore />
        </BannerButton>
        <BannerButton href='#'>
          <GooglePlay />
        </BannerButton>
      </BannerGroupButtons>
    </BannerContainer>
  );
};

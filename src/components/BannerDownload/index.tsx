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

import AppStoreMobile from '~/assets/appstore-mobile.svg';
import GooglePlayMobile from '~/assets/goolge-mobile.svg';

import BackgroundIllistration from '~/assets/bannerr-bg.svg';

export const BannerDownload = () => {
  return (
    <BannerContainer>
      {/* <BannerBackgroundIllustration>
        <BackgroundIllistration />
      </BannerBackgroundIllustration> */}
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
        <BannerButton className='mobile' href='#'>
          <img src='/appstore-mobile.svg' />
        </BannerButton>
        <BannerButton className='mobile' href='#'>
          <img src='/goolge-mobile.svg' />
        </BannerButton>
      </BannerGroupButtons>
    </BannerContainer>
  );
};

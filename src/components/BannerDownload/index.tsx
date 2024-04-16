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
        Baixe o aplicativo e comece já a economizar nas suas compras
      </BannerTitle>
      <BannerDescription>
        O seu assistente para compras inteligentes
      </BannerDescription>

      <BannerGroupButtons>
        <BannerButton>
          <img src='/app_store.png' />
        </BannerButton>
        <BannerButton>
          <img src='/play_store.png' />
        </BannerButton>
        <BannerButton className='mobile'>
          <img src='/app_store.png' />
        </BannerButton>
        <BannerButton className='mobile'>
          <img src='/play_store.png' />
        </BannerButton>
      </BannerGroupButtons>
    </BannerContainer>
  );
};

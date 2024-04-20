import {
  BannerContainer,
  BannerButton,
  BannerDescription,
  BannerGroupButtons,
  BannerTitle,
  BannerBackgroundIllustration,
} from './styles';

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
        <BannerButton data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
          <img src='/app_store.png' />
        </BannerButton>
        <BannerButton data-aos='fade-up' data-aos-anchor-placement='top-bottom'>
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

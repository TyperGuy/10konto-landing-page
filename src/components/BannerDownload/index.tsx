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
     
      <BannerTitle>
        Baixe o aplicativo e comece já a economizar nas suas compras
      </BannerTitle>
      <BannerDescription>
        O seu assistente para compras inteligentes
      </BannerDescription>

      <BannerGroupButtons>
        <BannerButton
          data-aos='zoom-in'
          data-aos-anchor-placement='top-bottom'
          data-aos-delay={300}
          data-aos-duration={500}
        >
          <img src='/app_store.png' />
        </BannerButton>
        <BannerButton
          data-aos='zoom-in'
          data-aos-anchor-placement='top-bottom'
          data-aos-delay={600}
          data-aos-duration={500}
        >
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

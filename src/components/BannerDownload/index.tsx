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
        <div
          style={{
            width: '200px',
            padding: ' 10px',
            backgroundColor: '#222',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
          }}
        >
          {' '}
          <img style={{ width: '80%' }} src='/app_store.png' />
        </div>
        <div
          style={{
            width: '200px',
            padding: ' 10px',
            backgroundColor: '#222',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: '10px',
          }}
        >
          {' '}
          <img style={{ width: '80%' }} src='/play_store.png' />
        </div>
      </BannerGroupButtons>
    </BannerContainer>
  );
};

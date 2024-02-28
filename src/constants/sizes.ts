export const HORIZONTAL_PADDING = 105;

export const PADDINGS = `
  padding-left: ${HORIZONTAL_PADDING}px;
  padding-right: ${HORIZONTAL_PADDING}px;
`;

export const DESKTOP_MAX_WIDTH = 1600;

export const CONTAINER_DEFAULT_PROPS = `
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CONTENT_MAX_WIDTH = `
  @media (min-width: 1650px) {
    max-width: ${DESKTOP_MAX_WIDTH}px;
  }
`;

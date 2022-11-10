import styled from 'styled-components'

export const AlbumItemWrapper = styled.div`
  /* padding: 0 10px; */
  padding: 0 2px;
  .top {
    position: relative;
    overflow: hidden;
    height: 100px;
    width: 118px;
    margin-top: 15px;
    img {
      width: 100px;
      height: 100px;
    }
    .cover {
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      position: absolute;
      background-position: 0 -570px;
      text-indent: -9999px;
    }
  }
  .bottom {
    width: 100px;
    font-size: 12px;
    .name {
      color: #000;
      ${(props) => props.theme.mix.textNowrap}
    }
    .artist {
      color: #666;
      ${(props) => props.theme.mix.textNowrap}
    }
  }
`

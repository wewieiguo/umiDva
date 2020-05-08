export const NAVMENU_CONFIG = [
  {
    path: '/home/borderContent',
    title: '边框',
  },
  {
    path: 'transition',
    title: '过渡',
  },
  {
    path: 'animation',
    title: '动画',
  },
  { path: 'requestDemo', title: '请求模拟' },
];
// chat ws address
export const WSADDRESS =
  process.env.NODE_ENV === 'development' ? '192.168.5.41:30000' : '192.168.5.41:30000';
// file upload
export const FILEUPLOADADDRESS =
  process.env.NODE_ENV === 'development' ? '/api/synergy' : '/synergy';

// request address
export const REQUEST_PREFIX =
  process.env.NODE_ENV === 'development'
    ? {
        NORMAL: '/api/synergy',
        MCU: '/api/sensor-mcu',
      }
    : {
        NORMAL: '/synergy',
        MCU: '/sensor-mcu',
      };

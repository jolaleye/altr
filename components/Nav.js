import { breakpoints } from '../theme';

export default function Nav() {
  return (
    <nav>
      <svg viewBox="0 0 357 169">
        <path d="M119.667,165.804l-36.42,0l0,-11.387c-7.738,9.722 -18.211,14.583 -31.418,14.583c-7.471,0 -14.341,-1.365 -20.612,-4.095c-6.27,-2.73 -11.739,-6.559 -16.409,-11.487c-4.669,-4.927 -8.304,-10.72 -10.906,-17.379c-2.601,-6.659 -3.902,-13.917 -3.902,-21.774c0,-7.325 1.267,-14.283 3.802,-20.876c2.535,-6.592 6.07,-12.352 10.606,-17.279c4.536,-4.928 9.939,-8.823 16.209,-11.686c6.27,-2.864 13.208,-4.295 20.812,-4.295c12.807,0 23.413,4.461 31.818,13.384l0,-10.188l36.42,0l0,102.479Zm60.834,0l-36.22,0l0,-165.804l36.22,0l0,165.804Zm135.676,0l-36.22,0l0,-102.479l36.22,0l0,16.78c3.869,-6.126 8.605,-10.82 14.208,-14.083c5.603,-3.263 12.14,-4.894 19.611,-4.894c0.934,0 1.968,0 3.102,0c1.134,0 2.435,0.133 3.902,0.399l0,34.559c-4.803,-2.397 -10.006,-3.595 -15.609,-3.595c-8.404,0 -14.708,2.497 -18.91,7.491c-4.203,4.994 -6.304,12.285 -6.304,21.874l0,43.948Zm-70.439,-102.479l20.611,0l0,30.164l-20.611,0l0,72.315l-36.221,0l0,-72.315l-12.006,0l0,-30.164l12.006,0l0,-30.764l36.221,0l0,30.764Zm-208.117,50.94c0,3.329 0.6,6.426 1.801,9.289c1.201,2.863 2.835,5.36 4.903,7.491c2.068,2.131 4.536,3.795 7.404,4.994c2.868,1.199 5.97,1.798 9.305,1.798c3.202,0 6.237,-0.599 9.105,-1.798c2.869,-1.199 5.337,-2.863 7.404,-4.994c2.068,-2.131 3.736,-4.595 5.003,-7.391c1.268,-2.797 1.901,-5.793 1.901,-8.99c0,-3.196 -0.633,-6.226 -1.901,-9.089c-1.267,-2.863 -2.935,-5.36 -5.003,-7.491c-2.067,-2.131 -4.535,-3.796 -7.404,-4.994c-2.868,-1.199 -5.903,-1.798 -9.105,-1.798c-3.335,0 -6.437,0.599 -9.305,1.798c-2.868,1.198 -5.336,2.863 -7.404,4.994c-2.068,2.131 -3.702,4.561 -4.903,7.291c-1.201,2.73 -1.801,5.694 -1.801,8.89Z" />
      </svg>

      <ul>
        <li>Features</li>
      </ul>

      <style jsx>{`
        nav {
          padding: 2em;
          margin: 0.5em 4% 0 4%;
          display: flex;
          flex-flow: row nowrap;
          justify-content: space-between;
          align-items: center;
        }

        svg {
          width: 5em;
          fill: hsl(0, 0%, 18%);
        }

        ul {
          list-style: none;
          font-weight: 500;
        }

        li {
          display: inline;
        }

        @media ${breakpoints.sm} {
          nav {
            margin: 1.25em 6% 0 6%;
          }
          svg {
            width: 5.5em;
          }
        }

        @media ${breakpoints.md} {
          nav {
            margin: 1.5em 8% 0 8%;
          }
        }
      `}</style>
    </nav>
  );
}

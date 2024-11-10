import { css } from "lit";

export default css`
  :host {
    display: inline-block;
  }

  

  .button--base {
    display: flex;
    flex-direction: row;
    gap: var(--qwack-space-1);
    align-items: center;
    text-decoration: none;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: var(--qwack-font-sans); 
    transition: all var(--qwack-t-duration) ease-in;
  }

  .button--default {
    border: solid var(--qwack-foreground);
    background-color: transparent;
  }

  .button--default:hover {
    background-color: var(--qwack-foreground);
    color: var(--qwack-background);
    transition: all var(--qwack-t-duration) ease-out;
  }

  .button--primary {
    border: solid var(--qwack-accent);  
    color: var(--qwack-accent);  
    background-color: transparent;
  }

  .button--primary:hover {
    background-color: var(--qwack-accent);
    color: var(--qwack-background);
    transition: all var(--qwack-t-duration) ease-out;
  }

  .button--small {
    border-width: 1.5px;
    font-size: var(--qwack-font-sm);
    font-weight: 600;
    padding: var(--qwack-space-1) var(--qwack-space-2);
    border-radius: var(--qwack-rounded-sm);
    letter-spacing: 1px;
  }

  .button--small .button--icon {
    height: var(--qwack-font-sm);
}

.button--regular{
    border-width: 1.5px;
    font-weight: 600;
    font-size: var(--qwack-font-r);
    padding: var(--qwack-space-1) var(--qwack-space-2);
    border-radius: var(--qwack-rounded-sm);
    letter-spacing: 0.5px;
  }

.button--regular .button--icon {
    height: var(--qwack-font-r);
}


  .button--large {
    border-width: 1.5px;
    font-weight: 600;
    font-size: var(--qwack-font-lg);
    padding: var(--qwack-space-2) var(--qwack-space-4);
    border-radius: var(--qwack-rounded-sm);
  }

.button--large .button--icon {
    height: var(--qwack-font-lg);
}


  .button--disabled {
    opacity: 60%;
    pointer-events: none;
  }

  
`

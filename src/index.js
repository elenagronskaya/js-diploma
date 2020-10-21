
import {isUserLoggedId} from "./form/form";
import{ initClients } from "./clients/clients";
import { initRouter } from "./router";
import {welcomInscription} from "./mainpage/mainpage";
import { getBrowser} from "./mainpage/mainpage";
import {initMenu} from "./menu"
import "./menu.scss"

initMenu();
initRouter();
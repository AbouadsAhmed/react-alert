import { AlertTriangle, Ban, BellRing, Info, OctagonX } from "lucide-react"
import Alert from "./components/ui/Alert/Alert"

function App() {
  return (
    <div className="app-wrapper">
      <Alert type={"alert-default"}
        icon={<BellRing size={20} />} title={'something went worng'}

      >
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque{" "}
          <a href="/">laboriosam</a> iste totam officiis beatae quas.
        </p>
      </Alert>
      <Alert type={"alert-info"} icon={<Info size={20} />} title={'something went worng'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa maxime qui quos minus laudantium esse, unde commodi, vel officia facere error optio repudiandae molestiae odio, libero beatae dignissimos provident et!'} />
      <Alert type={"alert-warning"} icon={<OctagonX size={20} />} title={'something went worng'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa maxime qui quos minus laudantium esse, unde commodi, vel officia facere error optio repudiandae molestiae odio, libero beatae dignissimos provident et!'} />
      <Alert type={"alert-error"} icon={<Ban size={20} />} title={'something went worng'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa maxime qui quos minus laudantium esse, unde commodi, vel officia facere error optio repudiandae molestiae odio, libero beatae dignissimos provident et!'} />
      <Alert type={"alert-success"} icon={<AlertTriangle size={20} />} title={'something went worng'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa maxime qui quos minus laudantium esse, unde commodi, vel officia facere error optio repudiandae molestiae odio, libero beatae dignissimos provident et!'} />
    </div>
  )
}

export default App

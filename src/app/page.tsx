import careerData from "@/data/career-data.json";
import {
  FiFacebook,
  FiGithub,
  FiGitlab,
  FiInstagram,
  FiLinkedin,
} from "react-icons/fi";
import { TbBrandGmail, TbBrightnessDownFilled } from "react-icons/tb";
import BtnIcon from "./components/btn-icon";
import Career from "./components/career";
import { ICareer } from "./components/career/career-item";
import BtnGroup from "./components/group-btn";
import LinkIcon from "./components/link-icon";
import SectionLink from "./components/link-section";

export default function Home() {
  return (
    <section className="container grid grid-cols-2 mx-auto min-h-screen px-24">
      <div className="py-24 flex flex-col justify-between sticky top-0 left-0 h-screen max-h-screen">
        <div>
          <h1 className="text-7xl font-semibold tracking-tight text-slate-200 italic">
            Do Tuan Nghia
          </h1>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-200">
            Coder
          </h2>
          <p className="mt-4 text-slate-500">
            I can build everything you can imagine
          </p>

          <div className="flex flex-row gap-4 mt-4">
            <LinkIcon
              href="mailto:nghiadt22.work@gmail.com"
              icon={TbBrandGmail}
            />
            <LinkIcon
              href="https://www.facebook.com/nghiacangao"
              icon={FiFacebook}
            />
            <LinkIcon href="" icon={FiLinkedin} />
            <LinkIcon
              href="https://www.facebook.com/nghiacangao"
              icon={FiInstagram}
            />
            <LinkIcon href="https://github.com/nacana22" icon={FiGithub} />
            <LinkIcon href="https://gitlab.com/codengoo" icon={FiGitlab} />
          </div>
        </div>

        <div className="space-y-4">
          <SectionLink href="" title="About" />
          <SectionLink href="" title="Experience" />
          <SectionLink href="" title="Projects" />
        </div>

        <div className="flex gap-2 items-center">
          <BtnGroup />
          <BtnIcon icon={TbBrightnessDownFilled} />
        </div>
      </div>
      <div className="py-24">
        <Career data={careerData.data as ICareer[]} />

        <p className="text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          commodo venenatis feugiat. Donec vitae massa magna. Vivamus egestas
          odio at tempor pretium. Maecenas vitae purus sit amet ex maximus
          tincidunt nec sit amet purus. Donec pulvinar enim in maximus cursus.
          Aenean dapibus elit eros, quis elementum sem tristique et. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Vivamus sit amet
          velit justo. Morbi urna sapien, elementum non turpis vitae,
          sollicitudin pulvinar tellus. Vivamus vel elit at eros placerat
          dictum. Aenean in odio velit. Fusce id arcu fermentum, elementum nulla
          id, finibus purus. Nullam viverra dapibus tincidunt. Aenean ultrices
          leo nulla, sed placerat nulla luctus eget. In ex nulla, iaculis nec
          felis vel, dictum consequat augue. Curabitur non tortor nec nibh
          egestas fringilla. Cras porttitor nisi id augue lobortis rutrum.
          Integer vel diam sed orci consequat egestas vitae ac nunc. Nunc
          interdum, eros et tincidunt feugiat, eros augue eleifend nisi, nec
          malesuada nisi ligula vel ex. Morbi sollicitudin justo quis turpis
          lacinia interdum. Praesent cursus justo augue, id imperdiet ante
          hendrerit et. Nunc tincidunt augue vel erat cursus convallis. Cras
          scelerisque eleifend nisi, vitae mattis sem varius in. Maecenas non
          lectus congue, aliquet urna non, maximus odio. Suspendisse pulvinar et
          justo nec tristique. Duis dapibus leo sed malesuada ultrices. Fusce
          sit amet sapien eget sapien fringilla interdum. In sollicitudin
          pretium vehicula. Vivamus finibus posuere dolor in vulputate. Vivamus
          id magna in sem convallis accumsan et non purus. Nam porttitor
          porttitor est, nec gravida ligula dapibus sit amet. Quisque maximus
          purus at rutrum convallis. Aliquam faucibus, orci at ultrices
          venenatis, sem magna bibendum nulla, luctus laoreet lectus turpis
          pulvinar quam. Duis blandit, lacus a aliquam vehicula, diam lorem
          aliquet ipsum, eu mattis ante velit ut risus. Pellentesque dignissim
          sodales sem tempor tristique. In luctus ligula a nisl tristique,
          convallis imperdiet massa vulputate. Phasellus porttitor, mauris quis
          consectetur aliquam, elit lorem condimentum arcu, ac tincidunt lacus
          augue eu nulla. Nam volutpat leo ut est volutpat, ac consequat turpis
          pretium. Praesent pulvinar mollis erat eget mollis. Nullam ut nisl non
          nunc imperdiet consequat. Pellentesque fringilla iaculis egestas.
          Proin et dignissim velit. Cras facilisis neque ac ligula euismod, at
          lobortis ipsum tincidunt. Donec nec ultrices nisl. Quisque feugiat
          elit urna, a eleifend arcu varius sit amet. Donec nibh sem, tristique
          ac ex non, interdum semper metus. Suspendisse quis feugiat elit. Nunc
          imperdiet, enim sed vehicula pellentesque, mi diam aliquet velit, sit
          amet luctus est lorem sed lorem. Aenean cursus lorem ut fermentum
          commodo. Ut bibendum congue augue. Etiam scelerisque dapibus mi, at
          mattis quam laoreet sit amet. Sed rutrum massa vel ornare congue.
          Integer consectetur est quis quam hendrerit, vel iaculis mi
          consectetur. Integer at faucibus ex, rutrum viverra odio. Etiam eu
          lacus interdum, vehicula arcu vitae, efficitur mauris. Sed mollis
          tempus ligula rutrum iaculis. Nulla posuere placerat rutrum.
        </p>
        <p className="text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          commodo venenatis feugiat. Donec vitae massa magna. Vivamus egestas
          odio at tempor pretium. Maecenas vitae purus sit amet ex maximus
          tincidunt nec sit amet purus. Donec pulvinar enim in maximus cursus.
          Aenean dapibus elit eros, quis elementum sem tristique et. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Vivamus sit amet
          velit justo. Morbi urna sapien, elementum non turpis vitae,
          sollicitudin pulvinar tellus. Vivamus vel elit at eros placerat
          dictum. Aenean in odio velit. Fusce id arcu fermentum, elementum nulla
          id, finibus purus. Nullam viverra dapibus tincidunt. Aenean ultrices
          leo nulla, sed placerat nulla luctus eget. In ex nulla, iaculis nec
          felis vel, dictum consequat augue. Curabitur non tortor nec nibh
          egestas fringilla. Cras porttitor nisi id augue lobortis rutrum.
          Integer vel diam sed orci consequat egestas vitae ac nunc. Nunc
          interdum, eros et tincidunt feugiat, eros augue eleifend nisi, nec
          malesuada nisi ligula vel ex. Morbi sollicitudin justo quis turpis
          lacinia interdum. Praesent cursus justo augue, id imperdiet ante
          hendrerit et. Nunc tincidunt augue vel erat cursus convallis. Cras
          scelerisque eleifend nisi, vitae mattis sem varius in. Maecenas non
          lectus congue, aliquet urna non, maximus odio. Suspendisse pulvinar et
          justo nec tristique. Duis dapibus leo sed malesuada ultrices. Fusce
          sit amet sapien eget sapien fringilla interdum. In sollicitudin
          pretium vehicula. Vivamus finibus posuere dolor in vulputate. Vivamus
          id magna in sem convallis accumsan et non purus. Nam porttitor
          porttitor est, nec gravida ligula dapibus sit amet. Quisque maximus
          purus at rutrum convallis. Aliquam faucibus, orci at ultrices
          venenatis, sem magna bibendum nulla, luctus laoreet lectus turpis
          pulvinar quam. Duis blandit, lacus a aliquam vehicula, diam lorem
          aliquet ipsum, eu mattis ante velit ut risus. Pellentesque dignissim
          sodales sem tempor tristique. In luctus ligula a nisl tristique,
          convallis imperdiet massa vulputate. Phasellus porttitor, mauris quis
          consectetur aliquam, elit lorem condimentum arcu, ac tincidunt lacus
          augue eu nulla. Nam volutpat leo ut est volutpat, ac consequat turpis
          pretium. Praesent pulvinar mollis erat eget mollis. Nullam ut nisl non
          nunc imperdiet consequat. Pellentesque fringilla iaculis egestas.
          Proin et dignissim velit. Cras facilisis neque ac ligula euismod, at
          lobortis ipsum tincidunt. Donec nec ultrices nisl. Quisque feugiat
          elit urna, a eleifend arcu varius sit amet. Donec nibh sem, tristique
          ac ex non, interdum semper metus. Suspendisse quis feugiat elit. Nunc
          imperdiet, enim sed vehicula pellentesque, mi diam aliquet velit, sit
          amet luctus est lorem sed lorem. Aenean cursus lorem ut fermentum
          commodo. Ut bibendum congue augue. Etiam scelerisque dapibus mi, at
          mattis quam laoreet sit amet. Sed rutrum massa vel ornare congue.
          Integer consectetur est quis quam hendrerit, vel iaculis mi
          consectetur. Integer at faucibus ex, rutrum viverra odio. Etiam eu
          lacus interdum, vehicula arcu vitae, efficitur mauris. Sed mollis
          tempus ligula rutrum iaculis. Nulla posuere placerat rutrum.
        </p>
        <p className="text-slate-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          commodo venenatis feugiat. Donec vitae massa magna. Vivamus egestas
          odio at tempor pretium. Maecenas vitae purus sit amet ex maximus
          tincidunt nec sit amet purus. Donec pulvinar enim in maximus cursus.
          Aenean dapibus elit eros, quis elementum sem tristique et. Interdum et
          malesuada fames ac ante ipsum primis in faucibus. Vivamus sit amet
          velit justo. Morbi urna sapien, elementum non turpis vitae,
          sollicitudin pulvinar tellus. Vivamus vel elit at eros placerat
          dictum. Aenean in odio velit. Fusce id arcu fermentum, elementum nulla
          id, finibus purus. Nullam viverra dapibus tincidunt. Aenean ultrices
          leo nulla, sed placerat nulla luctus eget. In ex nulla, iaculis nec
          felis vel, dictum consequat augue. Curabitur non tortor nec nibh
          egestas fringilla. Cras porttitor nisi id augue lobortis rutrum.
          Integer vel diam sed orci consequat egestas vitae ac nunc. Nunc
          interdum, eros et tincidunt feugiat, eros augue eleifend nisi, nec
          malesuada nisi ligula vel ex. Morbi sollicitudin justo quis turpis
          lacinia interdum. Praesent cursus justo augue, id imperdiet ante
          hendrerit et. Nunc tincidunt augue vel erat cursus convallis. Cras
          scelerisque eleifend nisi, vitae mattis sem varius in. Maecenas non
          lectus congue, aliquet urna non, maximus odio. Suspendisse pulvinar et
          justo nec tristique. Duis dapibus leo sed malesuada ultrices. Fusce
          sit amet sapien eget sapien fringilla interdum. In sollicitudin
          pretium vehicula. Vivamus finibus posuere dolor in vulputate. Vivamus
          id magna in sem convallis accumsan et non purus. Nam porttitor
          porttitor est, nec gravida ligula dapibus sit amet. Quisque maximus
          purus at rutrum convallis. Aliquam faucibus, orci at ultrices
          venenatis, sem magna bibendum nulla, luctus laoreet lectus turpis
          pulvinar quam. Duis blandit, lacus a aliquam vehicula, diam lorem
          aliquet ipsum, eu mattis ante velit ut risus. Pellentesque dignissim
          sodales sem tempor tristique. In luctus ligula a nisl tristique,
          convallis imperdiet massa vulputate. Phasellus porttitor, mauris quis
          consectetur aliquam, elit lorem condimentum arcu, ac tincidunt lacus
          augue eu nulla. Nam volutpat leo ut est volutpat, ac consequat turpis
          pretium. Praesent pulvinar mollis erat eget mollis. Nullam ut nisl non
          nunc imperdiet consequat. Pellentesque fringilla iaculis egestas.
          Proin et dignissim velit. Cras facilisis neque ac ligula euismod, at
          lobortis ipsum tincidunt. Donec nec ultrices nisl. Quisque feugiat
          elit urna, a eleifend arcu varius sit amet. Donec nibh sem, tristique
          ac ex non, interdum semper metus. Suspendisse quis feugiat elit. Nunc
          imperdiet, enim sed vehicula pellentesque, mi diam aliquet velit, sit
          amet luctus est lorem sed lorem. Aenean cursus lorem ut fermentum
          commodo. Ut bibendum congue augue. Etiam scelerisque dapibus mi, at
          mattis quam laoreet sit amet. Sed rutrum massa vel ornare congue.
          Integer consectetur est quis quam hendrerit, vel iaculis mi
          consectetur. Integer at faucibus ex, rutrum viverra odio. Etiam eu
          lacus interdum, vehicula arcu vitae, efficitur mauris. Sed mollis
          tempus ligula rutrum iaculis. Nulla posuere placerat rutrum.
        </p>
      </div>
    </section>
  );
}

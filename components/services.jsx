import { motion } from "framer-motion";
export default function Services() {
  return (
    <section id="hizmetler" className="flex font-sans min-h-screen bg-[#FAFAFA] px-8 sm:py-30 py-17 overflow-x-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, x: 0, y: -50 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="md:text-5xl text-3xl mb-7 mt-3 sm:mb-15 justify-center flex">Hizmetlerimiz</h2>
        </motion.div>
        <div className="flex gap-10 sm:gap-20 flex-wrap justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="shadow-2xl relative rounded-xl">
            <img
              className="max-w-[250px] max-h-[444px] h-full rounded-xl lg:filter lg:brightness-50  lg:hover:brightness-75 transition duration-300 ease-in-out"
              src="/ombre.jpg" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest">ombre</p>
          </motion.div>
                    <motion.div
            initial={{ opacity: 0, x: 0, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="shadow-2xl relative rounded-xl">
            <img
              className="max-w-[250px] rounded-xl lg:filter lg:brightness-50  lg:hover:brightness-75 transition duration-300 ease-in-out"
              src="/sombre.jpg" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest">sombre</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="shadow-2xl relative rounded-xl">
            <img
              className="max-w-[250px] rounded-xl lg:filter lg:brightness-50  lg:hover:brightness-75 transition duration-300 ease-in-out"
              src="/content-1.jpg" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest">brushlight</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="shadow-2xl relative rounded-xl">
            <img
              className="max-w-[250px] rounded-xl lg:filter lg:brightness-50  lg:hover:brightness-75 transition duration-300 ease-in-out"
              src="/highlight2.jpg" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest">highlight</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="shadow-2xl relative rounded-xl">
            <img
              className="max-w-[250px] max-h-[444px] h-full rounded-xl lg:filter lg:brightness-50  lg:hover:brightness-75 transition duration-300 ease-in-out"
              src="/acmaboyama2.jpg" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest">açma / boyama</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="shadow-2xl relative rounded-xl">
            <img
              className="max-w-[250px] max-h-[444px] h-full rounded-xl lg:filter lg:brightness-50  lg:hover:brightness-75 transition duration-300 ease-in-out"
              src="/sackesim.JPG" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest">saç kesimi</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 0, y: 50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="shadow-2xl relative rounded-xl">
            <img
              className="max-w-[250px] rounded-xl lg:filter lg:brightness-50  lg:hover:brightness-75 transition duration-300 ease-in-out"
              src="/keratin2.jpg" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-center text-white tracking-widest">keratin / kolajen bakımı</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50, y: 0 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="shadow-2xl relative rounded-xl">
            <img
              className="max-w-[250px] rounded-xl lg:filter lg:brightness-50  lg:hover:brightness-75 transition duration-300 ease-in-out"
              src="/kaynak3.jpg" alt="content" />
            <p className="w-full uppercase absolute bottom-5 flex justify-center text-xl text-white tracking-widest letter-spacing-">kaynak işlemi</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid';

const features = [
  {
    name: 'Push to deploy',
    description: 'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
    href: '#',
    icon: CloudArrowUpIcon,
  },
  {
    name: 'SSL certificates',
    description: 'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
    href: '#',
    icon: LockClosedIcon,
  },
  {
    name: 'Simple queues',
    description: 'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
    href: '#',
    icon: ArrowPathIcon,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const headerVariants = {
  hidden: { y: -50, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

const featureVariants = {
  hidden: { x: -100, opacity: 0 },
  visible: { 
    x: 0, 
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function AnimatedFeatures() {
  return (
    <motion.div 
      className="bg-white py-24 sm:py-32"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div 
          className="mx-auto max-w-2xl lg:text-center"
          variants={headerVariants}
        >
          <motion.h2 
            className="text-base/7 font-semibold text-indigo-600"
            whileHover={{ scale: 1.05 }}
          >
            Deploy faster
          </motion.h2>
          <motion.p 
            className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance"
            whileHover={{ scale: 1.02 }}
          >
            Everything you need to deploy your app
          </motion.p>
          <motion.p 
            className="mt-6 text-lg/8 text-gray-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </motion.p>
        </motion.div>

        <motion.dl 
          className="mx-auto mt-16 max-w-2xl grid grid-cols-1 gap-x-8 gap-y-16 sm:mt-20 lg:mt-24 lg:max-w-none lg:grid-cols-3"
          variants={containerVariants}
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className="flex flex-col"
              variants={featureVariants}
              whileHover={{ 
                scale: 1.05,
                transition: { type: "spring", stiffness: 300 }
              }}
            >
              <motion.dt 
                className="flex items-center gap-x-3 text-base/7 font-semibold text-gray-900"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
              >
                <feature.icon aria-hidden="true" className="size-5 flex-none text-indigo-600" />
                {feature.name}
              </motion.dt>
              <motion.dd 
                className="mt-4 flex flex-auto flex-col text-base/7 text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.3 }}
              >
                <p className="flex-auto">{feature.description}</p>
                <motion.p 
                  className="mt-6"
                  whileHover={{ x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <a href={feature.href} className="text-sm/6 font-semibold text-indigo-600">
                    Learn more <span aria-hidden="true">→</span>
                  </a>
                </motion.p>
              </motion.dd>
            </motion.div>
          ))}
        </motion.dl>
      </div>
    </motion.div>
  );
}

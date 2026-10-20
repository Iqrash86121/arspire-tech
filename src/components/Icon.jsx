import {
  Globe, Smartphone, Server, Briefcase, Palette, LifeBuoy, Landmark, Plane,
  GraduationCap, MessagesSquare, PenTool, Code2, Rocket, Lightbulb, Hammer,
  TrendingUp, Mail, Phone, MapPin, Clock, ArrowUpRight, ArrowRight, Menu, X, Send,
  Car, ShieldCheck, Bird, Terminal, Layers, Github, GitMerge, GitPullRequest, Package,
} from "lucide-react";

const MAP = {
  Globe, Smartphone, Server, Briefcase, Palette, LifeBuoy, Landmark, Plane,
  GraduationCap, MessagesSquare, PenTool, Code2, Rocket, Lightbulb, Hammer,
  TrendingUp, Mail, Phone, MapPin, Clock, ArrowUpRight, ArrowRight, Menu, X, Send,
  Car, ShieldCheck, Bird, Terminal, Layers, Github, GitMerge, GitPullRequest, Package,
};

export default function Icon({ name, size = 24, ...rest }) {
  const Cmp = MAP[name] || Globe;
  return <Cmp size={size} strokeWidth={1.8} aria-hidden="true" {...rest} />;
}

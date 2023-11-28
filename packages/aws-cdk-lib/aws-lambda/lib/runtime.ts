import { BundlingDockerImage, DockerImage } from '../../core';

export interface LambdaRuntimeProps {
  /**
   * Whether the ``ZipFile`` (aka inline code) property can be used with this runtime.
   * @default false
   */
  readonly supportsInlineCode?: boolean;

  /**
   * Whether the runtime enum is meant to change over time, IE NODEJS_LATEST.
   * @default false
   */
  readonly isVariable?: boolean;

  /**
   * The Docker image name to be used for bundling in this runtime.
   * @default - the latest docker image "amazon/public.ecr.aws/sam/build-<runtime>" from https://gallery.ecr.aws
   */
  readonly bundlingDockerImage?: string;

  /**
   * Whether this runtime is integrated with and supported for profiling using Amazon CodeGuru Profiler.
   * @default false
   */
  readonly supportsCodeGuruProfiling?: boolean;

  /**
   * Whether this runtime supports SnapStart.
   * @default false
   */
  readonly supportsSnapStart?: boolean;

  /**
   * Whether this runtime is deprecated.
   * @default false
   */
  readonly isDeprecated?: boolean;
}

export enum RuntimeFamily {
  NODEJS,
  JAVA,
  PYTHON,
  DOTNET_CORE,
  GO,
  RUBY,
  OTHER
}

/**
 * Lambda function runtime environment.
 *
 * If you need to use a runtime name that doesn't exist as a static member, you
 * can instantiate a `Runtime` object, e.g: `new Runtime('nodejs99.99')`.
 */
export class Runtime {
  /** A list of all known `Runtime`'s. */
  public static readonly ALL = new Array<Runtime>();

  /**
   * The NodeJS runtime (nodejs)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
   */
  public static readonly NODEJS = new Runtime('nodejs', RuntimeFamily.NODEJS, {
    supportsInlineCode: true,
    isDeprecated: true,
  });

  /**
   * The NodeJS 4.3 runtime (nodejs4.3)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
   */
  public static readonly NODEJS_4_3 = new Runtime('nodejs4.3', RuntimeFamily.NODEJS, {
    supportsInlineCode: true,
    isDeprecated: true,
  });

  /**
   * The NodeJS 6.10 runtime (nodejs6.10)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
   */
  public static readonly NODEJS_6_10 = new Runtime('nodejs6.10', RuntimeFamily.NODEJS, {
    supportsInlineCode: true,
    isDeprecated: true,
  });

  /**
   * The NodeJS 8.10 runtime (nodejs8.10)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
   */
  public static readonly NODEJS_8_10 = new Runtime('nodejs8.10', RuntimeFamily.NODEJS, {
    supportsInlineCode: true,
    isDeprecated: true,
  });

  /**
   * The NodeJS 10.x runtime (nodejs10.x)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
   */
  public static readonly NODEJS_10_X = new Runtime('nodejs10.x', RuntimeFamily.NODEJS, {
    supportsInlineCode: true,
    isDeprecated: true,
  });

  /**
   * The NodeJS 12.x runtime (nodejs12.x)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
   */
  public static readonly NODEJS_12_X = new Runtime('nodejs12.x', RuntimeFamily.NODEJS, {
    supportsInlineCode: true,
    isDeprecated: true,
  });

  /**
   * The NodeJS 14.x runtime (nodejs14.x)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest NodeJS runtime.
   */
  public static readonly NODEJS_14_X = new Runtime('nodejs14.x', RuntimeFamily.NODEJS, {
    supportsInlineCode: true,
    isDeprecated: true,
  });

  /**
   * The NodeJS 16.x runtime (nodejs16.x)
   */
  public static readonly NODEJS_16_X = new Runtime('nodejs16.x', RuntimeFamily.NODEJS, { supportsInlineCode: true });

  /**
   * The NodeJS 18.x runtime (nodejs18.x)
   */
  public static readonly NODEJS_18_X = new Runtime('nodejs18.x', RuntimeFamily.NODEJS, { supportsInlineCode: true });

  /**
   * The NodeJS 20.x runtime (nodejs20.x)
   */
  public static readonly NODEJS_20_X = new Runtime('nodejs20.x', RuntimeFamily.NODEJS, { supportsInlineCode: true });

  /**
   * The latest NodeJS version currently available in ALL regions (not necessarily the latest NodeJS version
   * available in YOUR region).
   */
  public static readonly NODEJS_LATEST = new Runtime('nodejs18.x', RuntimeFamily.NODEJS, { supportsInlineCode: true, isVariable: true });

  /**
   * The Python 2.7 runtime (python2.7)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest Python runtime.
   */
  public static readonly PYTHON_2_7 = new Runtime('python2.7', RuntimeFamily.PYTHON, {
    supportsInlineCode: true,
    isDeprecated: true,
  });

  /**
   * The Python 3.6 runtime (python3.6) (not recommended)
   *
   * The Python 3.6 runtime is deprecated as of July 2022.
   *
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest Python runtime.
   */
  public static readonly PYTHON_3_6 = new Runtime('python3.6', RuntimeFamily.PYTHON, {
    supportsInlineCode: true,
    supportsCodeGuruProfiling: true,
    isDeprecated: true,
  });

  /**
   * The Python 3.7 runtime (python3.7)
   */
  public static readonly PYTHON_3_7 = new Runtime('python3.7', RuntimeFamily.PYTHON, {
    supportsInlineCode: true,
    supportsCodeGuruProfiling: true,
  });

  /**
   * The Python 3.8 runtime (python3.8)
   */
  public static readonly PYTHON_3_8 = new Runtime('python3.8', RuntimeFamily.PYTHON, {
    supportsInlineCode: true,
    supportsCodeGuruProfiling: true,
  });

  /**
   * The Python 3.9 runtime (python3.9)
   */
  public static readonly PYTHON_3_9 = new Runtime('python3.9', RuntimeFamily.PYTHON, {
    supportsInlineCode: true,
    supportsCodeGuruProfiling: true,
  });

  /**
   * The Python 3.10 runtime (python3.10)
   */
  public static readonly PYTHON_3_10 = new Runtime('python3.10', RuntimeFamily.PYTHON, {
    supportsInlineCode: true,
    supportsCodeGuruProfiling: true,
  });

  /**
   * The Python 3.11 runtime (python3.11)
   */
  public static readonly PYTHON_3_11 = new Runtime('python3.11', RuntimeFamily.PYTHON, {
    supportsInlineCode: true,
    supportsCodeGuruProfiling: true,
  });

  /**
   * The Python 3.12 runtime (python3.12)
   */
  public static readonly PYTHON_3_12 = new Runtime('python3.12', RuntimeFamily.PYTHON, {
    supportsInlineCode: true,
    supportsCodeGuruProfiling: true,
  });

  /**
   * The Java 8 runtime (java8)
   */
  public static readonly JAVA_8 = new Runtime('java8', RuntimeFamily.JAVA, {
    supportsCodeGuruProfiling: true,
  });

  /**
   * The Java 8 Corretto runtime (java8.al2)
   */
  public static readonly JAVA_8_CORRETTO = new Runtime('java8.al2', RuntimeFamily.JAVA, {
    supportsCodeGuruProfiling: true,
  });

  /**
   * The Java 11 runtime (java11)
   */
  public static readonly JAVA_11 = new Runtime('java11', RuntimeFamily.JAVA, {
    supportsCodeGuruProfiling: true,
    supportsSnapStart: true,
  });

  /**
   * The Java 17 runtime (java17)
   */
  public static readonly JAVA_17 = new Runtime('java17', RuntimeFamily.JAVA, {
    supportsCodeGuruProfiling: true,
    supportsSnapStart: true,
  });

  /**
   * The Java 21 runtime (java21)
   */
  public static readonly JAVA_21 = new Runtime('java21', RuntimeFamily.JAVA, {
    supportsCodeGuruProfiling: true,
    supportsSnapStart: true,
  });

  /**
   * The .NET 6 runtime (dotnet6)
   */
  public static readonly DOTNET_6 = new Runtime('dotnet6', RuntimeFamily.DOTNET_CORE);

  /**
   * The .NET Core 1.0 runtime (dotnetcore1.0)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest .NET Core runtime.
   */
  public static readonly DOTNET_CORE_1 = new Runtime('dotnetcore1.0', RuntimeFamily.DOTNET_CORE, {
    isDeprecated: true,
  });

  /**
   * The .NET Core 2.0 runtime (dotnetcore2.0)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest .NET Core runtime.
   */
  public static readonly DOTNET_CORE_2 = new Runtime('dotnetcore2.0', RuntimeFamily.DOTNET_CORE, {
    isDeprecated: true,
  });

  /**
   * The .NET Core 2.1 runtime (dotnetcore2.1)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest .NET Core runtime.
   */
  public static readonly DOTNET_CORE_2_1 = new Runtime('dotnetcore2.1', RuntimeFamily.DOTNET_CORE, {
    isDeprecated: true,
  });

  /**
   * The .NET Core 3.1 runtime (dotnetcore3.1)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest .NET Core runtime.
   */
  public static readonly DOTNET_CORE_3_1 = new Runtime('dotnetcore3.1', RuntimeFamily.DOTNET_CORE, {
    isDeprecated: true,
  });

  /**
   * The Go 1.x runtime (go1.x)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the PROVIDED_AL2023 runtime.
   */
  public static readonly GO_1_X = new Runtime('go1.x', RuntimeFamily.GO, {
    isDeprecated: true,
  });

  /**
   * The Ruby 2.5 runtime (ruby2.5)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest Ruby runtime.
   */
  public static readonly RUBY_2_5 = new Runtime('ruby2.5', RuntimeFamily.RUBY, {
    isDeprecated: true,
  });

  /**
   * The Ruby 2.7 runtime (ruby2.7)
   */
  public static readonly RUBY_2_7 = new Runtime('ruby2.7', RuntimeFamily.RUBY);

  /**
   * The Ruby 3.2 runtime (ruby3.2)
   */
  public static readonly RUBY_3_2 = new Runtime('ruby3.2', RuntimeFamily.RUBY);

  /**
   * The custom provided runtime (provided)
   * @deprecated Legacy runtime no longer supported by AWS Lambda. Migrate to the latest provided.al2023 runtime.
   */
  public static readonly PROVIDED = new Runtime('provided', RuntimeFamily.OTHER, {
    isDeprecated: true,
  });

  /**
   * The custom provided runtime with Amazon Linux 2 (provided.al2)
   */
  public static readonly PROVIDED_AL2 = new Runtime('provided.al2', RuntimeFamily.OTHER);

  /**
   * The custom provided runtime with Amazon Linux 2023 (provided.al2023)
   */
  public static readonly PROVIDED_AL2023 = new Runtime('provided.al2023', RuntimeFamily.OTHER);

  /**
   * A special runtime entry to be used when function is using a docker image.
   */
  public static readonly FROM_IMAGE = new Runtime('FROM_IMAGE');

  /**
   * The name of this runtime, as expected by the Lambda resource.
   */
  public readonly name: string;

  /**
   * Whether the ``ZipFile`` (aka inline code) property can be used with this
   * runtime.
   */
  public readonly supportsInlineCode: boolean;

  /**
   * Whether this runtime is integrated with and supported for profiling using Amazon CodeGuru Profiler.
   */
  public readonly supportsCodeGuruProfiling: boolean;

  /**
   * Whether this runtime supports snapstart.
   */
  public readonly supportsSnapStart: boolean;

  /**
   * The runtime family.
   */
  public readonly family?: RuntimeFamily;

  /**
   * DEPRECATED
   * @deprecated use `bundlingImage`
   */
  public readonly bundlingDockerImage: BundlingDockerImage;

  /**
   * The bundling Docker image for this runtime.
   */
  public readonly bundlingImage: DockerImage;

  /**
   * Enabled for runtime enums that always target the latest available.
   */
  public readonly isVariable: boolean;

  /**
   * Whether the runtime is deprecated.
   */
  public readonly isDeprecated: boolean;

  constructor(name: string, family?: RuntimeFamily, props: LambdaRuntimeProps = {}) {
    this.name = name;
    this.supportsInlineCode = !!props.supportsInlineCode;
    this.family = family;
    this.isVariable = !!props.isVariable;
    this.isDeprecated = props.isDeprecated ?? false;

    const imageName = props.bundlingDockerImage ?? `public.ecr.aws/sam/build-${name}`;
    this.bundlingDockerImage = DockerImage.fromRegistry(imageName);
    this.bundlingImage = this.bundlingDockerImage;
    this.supportsCodeGuruProfiling = props.supportsCodeGuruProfiling ?? false;
    this.supportsSnapStart = props.supportsSnapStart ?? false;

    Runtime.ALL.push(this);
  }

  public toString(): string {
    return this.name;
  }

  public runtimeEquals(other: Runtime): boolean {
    return other.name === this.name &&
      other.family === this.family &&
      other.supportsInlineCode === this.supportsInlineCode;
  }
}

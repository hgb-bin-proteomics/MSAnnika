# Support for Astral Data

In order to process crosslinking data from Astral instruments we recommend using [MS Annika 3.0 v3.0.5](https://github.com/hgb-bin-proteomics/MSAnnika/releases/tag/v3.0.5) or greater (e.g. [latest](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/releases/latest/PD3.1/latest.zip)). Although theoretically all MS Annika versions support Astral data, earlier versions require sufficient hardware for processing RAW files of more than 100 000 spectra (specifically enough memory, 128GB+ is recommended). MS Annika version 3.0.5+ is memory optimized and runs on standard commodity hardware. We also recommend disabling the following parameter:

- MS Annika Detector Node:
  - Doublet Selection:
    - Try infer missing charge states: False (If this parameter is not visible, please check that `Show Advanced Parameters` is on).

## Recommendations for Astral Data

We recommend running searches on Astral data in Proteome Discoverer 3.1 using [MS Annika 3.0 v3.0.7](https://github.com/hgb-bin-proteomics/MSAnnika/releases/tag/v3.0.7). For your convenience, we
also supply several analysis templates for Astral searches. Please note that all of these workflows additionally require the installation of [MS Amanda](https://dx.doi.org/10.1021/pr500202e) which can be downloaded [here](https://github.com/hgb-bin-proteomics/MSAmanda) or installed via the Proteome Discoverer Third-Party installer.

- Astral DSSO search: [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSSO.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSSO.zip)
- Astral DSBSO search: [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSBSO.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSBSO.zip)
- Astral DSBU search: [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSBU.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSBU.zip)
- Astral DSS search: [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSS.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSS.zip)
- Astral PhoX search: [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_PhoX.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_PhoX.zip)

We generally also recommend deisotoping spectra e.g. via the [IMP MS2 Spectrum Processor](https://ms.imp.ac.at/?action=spectrum-processor). The following workflows can be used with the IMP MS2
Spectrum Processor node:

- Astral DSSO search with deisotoping: [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSSO_deiso.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSSO_deiso.zip)
- Astral DSBSO search with deisotoping: [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSBSO_deiso.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSBSO_deiso.zip)
- Astral DSBU search with deisotoping: [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSBU_deiso.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSBU_deiso.zip)
- Astral DSS search with deisotoping: [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSS_deiso.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_DSS_deiso.zip)
- Astral PhoX search with deisotoping: [pdAnalysis](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_PhoX_deiso.pdAnalysis) / [zip](https://github.com/hgb-bin-proteomics/MSAnnika/raw/master/workflows/astral/PD3.1/Astral_PhoX_deiso.zip)

## Expected Performance on Astral Data

Giving an estimate on performance is hard without knowing the specific sample and data analysis hardware, but full human-proteome-wide searches should roughly
take between 2h-3h per file on modern hardware. Read more [here](https://github.com/hgb-bin-proteomics/MSAnnika#expected-performance-on-astral-data).
